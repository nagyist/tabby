import { ReactNode, useContext, useEffect } from 'react'
import { Element } from 'react-markdown/lib/ast-to-react'

import { cn } from '@/lib/utils'

import { CodeBlock } from '../ui/codeblock'
import { IconSquareChevronRight } from '../ui/icons'
import { MessageMarkdownContext } from './markdown-context'

export interface CodeElementProps {
  node: Element
  inline?: boolean
  className?: string
  children: ReactNode & ReactNode[]
}

/**
 * Code element in Markdown AST.
 */
export function CodeElement({
  inline,
  className,
  children,
  ...props
}: CodeElementProps) {
  const {
    lookupSymbol,
    canWrapLongLines,
    onApplyInEditor,
    onCopyContent,
    supportsOnApplyInEditorV2,
    onNavigateToContext,
    symbolPositionMap
  } = useContext(MessageMarkdownContext)

  const keyword = children[0]?.toString()
  const symbolLocation = keyword ? symbolPositionMap.get(keyword) : undefined

  useEffect(() => {
    if (!inline || !lookupSymbol || !keyword) return
    lookupSymbol(keyword)
  }, [inline, keyword, lookupSymbol])

  if (children.length) {
    if (children[0] === '▍') {
      return <span className="mt-1 animate-pulse cursor-default">▍</span>
    }
    children[0] = (children[0] as string).replace('`▍`', '▍')
  }

  if (inline) {
    const isSymbolNavigable = Boolean(symbolLocation)

    const handleClick = () => {
      if (!isSymbolNavigable || !symbolLocation || !onNavigateToContext) return

      onNavigateToContext(
        {
          filepath: symbolLocation.targetFile,
          range: {
            start: symbolLocation.targetLine,
            end: symbolLocation.targetLine
          },
          git_url: '',
          content: '',
          kind: 'file'
        },
        {
          openInEditor: true
        }
      )
    }

    return (
      <code
        className={cn(
          'group/symbol inline-flex flex-nowrap items-center gap-1',
          className,
          {
            symbol: !!lookupSymbol,
            'bg-muted leading-5': !isSymbolNavigable,
            'cursor-pointer hover:bg-muted/50 border': isSymbolNavigable
          }
        )}
        onClick={handleClick}
        {...props}
      >
        {isSymbolNavigable && (
          <IconSquareChevronRight className="h-3.5 w-3.5 text-primary" />
        )}
        <span
          className={cn('self-baseline', {
            'group-hover/symbol:text-primary': isSymbolNavigable
          })}
        >
          {children}
        </span>
      </code>
    )
  }

  const match = /language-(\w+)/.exec(className || '')
  return (
    <CodeBlock
      language={(match && match[1]) || ''}
      value={String(children).replace(/\n$/, '')}
      onApplyInEditor={onApplyInEditor}
      onCopyContent={onCopyContent}
      canWrapLongLines={canWrapLongLines}
      supportsOnApplyInEditorV2={supportsOnApplyInEditorV2}
    />
  )
}