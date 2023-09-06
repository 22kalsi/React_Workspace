import Footer from "../Elements/Footer";
import Header from "../Elements/Header";

const Accounts = () => {
    const Head = 
    {
      "first" : "Account",
      "second": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius",
      "buttons" : false
    }
    return(

<div>

<Header change={Head}/>
Acounts
<Footer/>

</div>

    )

}

export default Accounts