import React from 'react';
import '../CardContainer/CardContainer.css'
import Card from '../Card/Card.jsx'
import CardMV from '../Card/CardVM.jsx'
export default function CardContainer(){
    var proyects=[
        {
            client: "Cliente1",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://i.ytimg.com/vi/6K1wfUCFclw/maxresdefault.jpg"

        },
        {
            client: "Cliente2",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://3.bp.blogspot.com/-7DKHCLOX-Mw/V-NXQ9DgkuI/AAAAAAAAC8U/ZV5zXUleFgoWHQhMKvknApjZW018Dc13ACLcB/s1600/EvolucionRealidadVirtual.jpg"
        },
        {
            client: "Cliente3",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://startupxplore.com/es/blog/wp-content/uploads/2016/04/realidad-virtual.jpg"
        },
        {
            client: "Cliente4",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://www.educaciontrespuntocero.com/wp-content/uploads/2016/11/realidad-virtual-microsoft.jpg"
        },
        {
            client: "Cliente5",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://www.crissh2020.eu/wp-content/uploads/2018/10/criss-vr-class.png"
        }, 
        {
            client: "Cliente6",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://i0.wp.com/www.apleaners.com/wp-content/uploads/2019/03/Realidad-Aumentada-aplicada-a-la-medicina-e1551637903269.png?fit=1500%2C624&ssl=1"
        },
        {
            client: "Cliente7",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://syncrovr.com/wp-content/uploads/2019/08/Realidad-Virtual-Y-Medicina6.jpg"
        },
        {
            client: "Cliente8",
            date: "03/04/2020",
            description: "Esta es una breve descripción del proyecto, la cual va a ser mostrada en cada card",
            img: "https://www.cice.es/wp-content/uploads/2019/05/ImagenPortadaArticulo.jpg"
        }
    ]
        return (
        <div class="row row-cols-1 row-cols-md-3 g-3 container">
           {proyects.map((p) => 
                <Card img={p.img} client={p.client} description={p.description}></Card>
           )}
           <CardMV></CardMV>
        </div>    )
}