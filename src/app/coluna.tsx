export default function Coluna(props: any){
    return (
        <div>
            {props.props.map((item: any,i: any) => {
                return (
                    <>
                        <div className={item.status}></div>
                    </>
                )
            })}
        </div>
    )
}[]