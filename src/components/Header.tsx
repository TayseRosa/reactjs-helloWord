type Props ={
  nameApp:string;
  ageApp: number;
}

export const Header = ({ nameApp, ageApp }:Props) => {
  return(
    <header>
      <p>Olá { nameApp } parabens pelos seus { ageApp } anos</p>
    </header>
  )
}