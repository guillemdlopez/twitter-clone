import Link from 'next/link'
import AppLayout from '../../components/AppLayout'

// a un componente de tipo página no le puedes inyectar otro tipo de props


export default function Timeline({ userName }) {
    return (
        <AppLayout>
            <h1>This is the Timeline of { userName }</h1>
            <Link href="/">
                <a>Go home</a>
            </Link>
            <style jsx>
                {`
                    h1 {
                        font-size: 36px;
                        color: red;
                    }
                `}
            </style>
        </AppLayout>
    )
}
// getInitialProps ==> SOLO EN COMPONENTES DE TIPO PÁGINA

// los componentes de tipo página tienen esta función
// nos va a ofrecer una forma de que en el servidor le demos los props
// al componente que debe utilizar
// Ejemplo: fetching de datos que le vamos a pasar como props al componente

// Props que va a recibir el componente
// dónde se ejecuta para que tengamos acceso a esta info?
// Todo esto se ejecuta en el SERVIDOR y se ejecuta antes de renderizarlo
// Primero recupera datos  de forma asíncrona y los renderiza antes de que lleguen a cliente
// Los datos se los enviamos en forma de html
// Proceso de hidratación: para renderizar los datos que tienes en el servidor de la misma forma en el lado del cliente
// tienes que saber los datos con los que has renderizado eso. Por eso se los tienes que enviar al cliente, para que sea capaz
// de renderizar exactamente lo mismo que ya has renderizado en el servidor --> hidratación (el html es estático y lo hidratamos, "hacelo dinámico, dotarlo de vida, y para eso tenemos que saber con qué datos lo hemos iniciado en el servodor")


// -------------------------------------
// También se ejecuta en el cliente
// cada vez que entramos en una página se va a ejecutar 


Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const { userName } = data;
        // el console.log lo vamos a ver en la terminal
        // porque el código se está ejecutando en el servidor
        console.log(userName);

        // este objeto le va a llegar al componente como props
        // y tiene que ser exactamente el mismo (estar escrito exactamente igual)
        return data;
    })
};