export default function Loading(){
    const styles={
        loading:{
            margin: "0 auto",
            fontSize: "var(--size3)",
            position: "relative",
            textAlign: "center"
        }
    }
    
    return (
        <h2 style={styles.loading}>Loading...</h2>
    )
}