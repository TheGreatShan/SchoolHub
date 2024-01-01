interface IProps {
    title: string
    children: JSX.Element | JSX.Element[]
}

function HorizontalList({title, children}:IProps) {
    return(
        <div className="HorizontalList">
            <h1>{title}</h1>
            <div className="flex-row">
                {children}
            </div>
        </div>
    );
}

export default HorizontalList;