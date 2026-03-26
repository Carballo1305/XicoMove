import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, DirectionsRenderer, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%', // Cambiado a 100% para que se adapte al contenedor padre
    borderRadius: '20px'
};

function Mapa({ lat = 20.2718, lng = -97.9559, origen = null, destino = null }) { // Valores por defecto de Xico
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
    })

    const [directions, setDirections] = useState(null);

    useEffect(() => {
        if (!isLoaded || !origen || !destino) return;

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: origen,
                destination: destino,
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    console.error("Error al calcular la ruta:", status);
                }
            }
        );
    }, [isLoaded, origen, destino]);

    if (loadError) return <div>Error cargando mapa</div>
    if (!isLoaded) return <div>Cargando mapa...</div>

    const center = { lat, lng };

    return (
        <div className="mapa-wrapper" style={{ width: '100%', height: '100%' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}

                options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                }}
            >
                {directions && <DirectionsRenderer directions={directions} />}
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}
export default Mapa;