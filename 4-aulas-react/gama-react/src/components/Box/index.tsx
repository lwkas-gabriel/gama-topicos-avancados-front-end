import "./styles.scss"

interface BoxProps {
    background?: string;
    children: JSX.Element;
}

export default function Box({ background, children }: BoxProps) {
    return (
        <section className={`box ${background}`}>
            {children}
        </section>
    )
}