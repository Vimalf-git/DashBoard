import React from 'react'

function List({ data }) {
    // console.log(props.data);
    // const { tittle, color, img } =data;
    // console.log(img);
    return (
        <>

                {data.map((e, i) => {
                    return (
                            <ul key={i}>
                                <li style={{
                                    color: e.color
                                }} className='list_li'><img src={e.img} />
                                {e.tittle}</li>
                            </ul>
                    )
                })}

        </>
    )
}

export default List