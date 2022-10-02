
const containerStyle = {
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

function Loading() {
    return (
        <div
            style={containerStyle}
        >
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading;