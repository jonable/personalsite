const pickRandomColor = () => {
    // const colors = [
    //     "rgba(254, 222, 25, .7)",
    //     "rgba(243, 101, 35, .7)",
    //     "rgba(210, 35, 52, .7)",
    //     "rgba(146, 39, 143, .7)",
    //     "rgba(33, 64, 154, .7)"
    // ]  
    const colors = [
        "linear-gradient(45deg, rgba(254, 222, 25, .70), rgba(243, 101, 35, .70), rgba(210, 35, 52, .70))",
        "linear-gradient(45deg, rgba(146, 39, 143, .70),rgba(33, 64, 154, .70),rgba(254, 222, 25, .70))",
        "linear-gradient(45deg, rgba(33, 64, 154, .70),rgba(146, 39, 143, .70),rgba(210, 35, 52, .70))",
        // "rainbow-background-1",
        // "rainbow-background-2",
        // "rainbow-background-3",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}
export default pickRandomColor