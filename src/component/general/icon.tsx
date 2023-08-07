import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    icon: any,
    size?: Number,
    color?: string | undefined
}
export default function Icon({
    icon,
    size,
    color,
}: Props) {
    return (
        <>
            <FontAwesomeIcon icon={icon} style={{ width: (size ?? 1) + "rem", height: (size ?? 1) + "rem" }} color={color} />
        </>
    )
}