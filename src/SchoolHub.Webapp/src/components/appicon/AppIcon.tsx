import './AppIcon.css';

interface IProps {
    hasNotification?: boolean;
    img: string
}

function AppIcon(props: IProps) {

    const hasNotification = props.hasNotification?? false;

    return (
        <a className="AppIcon" href="https://teams.microsoft.com">
            <img src={props.img} width="80%"/>
            {hasNotification? <span></span>: ''}
        </a>
    );
}

export default AppIcon;