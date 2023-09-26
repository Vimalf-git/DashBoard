import React from 'react'

function List({ data }) {
    // console.log(props.data);
    // const { tittle, color, img } =data;
    // console.log(img);
    return (
        
            <ul className='side_data_ul'>
                {data.map((e, i) => {
                    return (

                        <li style={{
                            color: e.color
                        }} className='list_li' key={i}><img src={e.img} />
                            {e.tittle}
                            
                        </li>

                    )
                })}
            </ul>

    )
}

export default List