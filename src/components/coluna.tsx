export default function Coluna(props: any){
    return (
        <div>
            {props.props.map((item: any,i: any) => {
                return (
                    <>
                        <div key={i} className={item.status}></div>
                    </>
                )
            })}
        </div>
    )
}[]