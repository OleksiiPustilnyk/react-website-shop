type TitleProps = {
    title: string
    number?: number
}

const Title = ({ title, number = 5 }: TitleProps) => {
    return (
        <h1>
            Hello {title} {number}
        </h1>
    )
}

export default Title
