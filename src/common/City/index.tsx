import SVG from '../../assets/city.svg';

export const City = (props: {
    width: number | 200,
    height: number | 200,
}) => {
    return (
        <img
            src={SVG}
            style={{ width: props.width, height: props.height }}
        />
    )
}