import { HTMLProps } from "react"
import "./styles.css"

interface LinkProps {
    name: string;
    redirect: string;
}

export default function Link(props: LinkProps) {
    return (
        <a className="links-menu" href={props.redirect} target="_blank">
            {props.name}
        </a >
    )
}