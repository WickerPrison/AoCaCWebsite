export default function GreyOut(){
    return(
        <div style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(1,1,1,0.4)",
            zIndex: 5
        }}></div>
    )
}