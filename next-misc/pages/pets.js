import Image from "next/image";
import petImage from '../public/3.jpg'

function Pets() {

  return (
      <>
        <h1>Pets</h1>
        <Image src={petImage} placeholder='blur' alt='pet description' width='280' height='420'  />
        {
          ['1', '2', '3', '4', '5'].map(path => {
            return (
                <div key={path}>
                  <Image src={`/${path}.jpg`} alt={`pet ${path}`} width='280' height='420'/>
                </div>
            )
          })
        }
      </>
  )

}

export default Pets
