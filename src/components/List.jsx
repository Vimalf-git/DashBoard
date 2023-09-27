import React from 'react'

function List({ data }) {
    // console.log(props.data);
    // const { tittle, color, img } =data;
    // console.log(img);
    return (
        <>
            {data.map((e, i) => {
                return (
                    <ul className='side_data_ul'>

                        <li style={{
                            color: e.color
                        }} className='list_li' key={i}><img src={e.img} />
                            <p>{e.tittle}
                            </p>
                        </li>
                    </ul>

                )
            })}
        </>


    )
}

export default List