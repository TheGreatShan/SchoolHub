import './AppIcon.css';

interface IProps {
    hasNotification?: boolean;
    img: string;
    to: string;
}

function AppIcon(props: IProps) {

    const hasNotification = props.hasNotification?? false;

    return (
        <a className="AppIcon" href={props.to} target='_blank'>
            <img src={props.img} width="80%"/>
            {hasNotification? <span></span>: ''}
        </a>
    );
}

export default AppIcon;