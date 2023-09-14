import React from "react";

const FAQPage=()=>{
    return(
        <div className="container pt-3">
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Which cryptocurrencies are traded on this website?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       You can trade cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and many other well-known digital assets here. A complete list of available cryptocurrencies can be found on our "Trading" page
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How can I deposit and withdraw my cryptocurrencies?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      To deposit cryptocurrencies into your account, first log in to your account and select the "Deposit" section. Then, choose the cryptocurrency you want to deposit, enter the destination address, and specify the desired amount. For withdrawals, go to the "Withdraw" section, enter the cryptocurrency and destination address, and confirm the amount you'd like to withdraw.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Is my information secure?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, the security of your information is of paramount importance to us. We employ advanced encryption technologies to safeguard your account information. Additionally, we highly recommend enabling Two-Factor Authentication (2FA) to enhance the security of your account. Your information is used solely for transaction purposes and will never be shared with third parties.
      </div>
    </div>
  </div>
</div>
        </div>
    )
};
export default FAQPage;