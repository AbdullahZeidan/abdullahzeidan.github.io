import { btnColorsCls } from '@/common/classnames'
import { cn } from '@/utils/dom'

interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode
    external?: boolean
}
export default function IconLink({
    className,
    external,
    ...props
}: IconLinkProps) {
    return (
        <a
            className={cn(btnColorsCls, 'rounded-md p-2 text-2xl', className)}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
            {...props}
        >
            {props.children}
        </a>
    )
}
