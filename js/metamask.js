/*
Template Name: metamask
Author: synergy
Email: synergypoweredge@gmail.com
File: js
*/

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
//            web3.eth.sendTransaction({/* ... */});
	    startApp();
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
//        web3.eth.sendTransaction({/* ... */});
        startApp();
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	document.getElementById("metamask").innerHTML = '<font color="red"><center>Metamask not installed!<br/>First <a href=https://metamask.io/ target=_blank>install Metamask.</a></center></font> <hr/>';
    }
});

var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newCapital","type":"address"},{"name":"_newReward","type":"address"}],"name":"changeOuts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"takeCapital","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sourceDesc","type":"string"}],"name":"payDividends","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"capitalAmount_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_checkForInactive","type":"address"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"refferedBy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"capital_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AdminRewardAmount_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"incomingDividends","type":"uint256"},{"indexed":false,"name":"sourceDescription","type":"string"},{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"onPayDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"DividentsFromNulled","type":"uint256"},{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":true,"name":"senderAddress","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"onBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"userAddress","type":"address"},{"indexed":true,"name":"refferedByAddress","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"onNewRefferal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}]');
var address = "0xE459238eDE66Ab1b2B19c9acF37dcA27b922d191";//mainnet ethedge.co
//var address = "0x789cb2527e521290b294abFea345db8A62d33508";//ropsten testnet
var User={};
var cI;
var defaultMasternode='0xEc31176d4df0509115abC8065A8a3F8275aafF2b';
var ethnum=6;
var toknum=2;

function startApp(){

var connected = web3.isConnected();
	if(!connected){
	  console.log("node not connected!");
	  alert('Install metamask first!');
	}else{
	    var version = web3.version.api;
	  console.log("node connected. web3 version is "+version);
	}

//	console.log(window.location.search);
	var queryParams = new URLSearchParams(window.location.search);
//	console.log(queryParams.get('masternode'));
	if (!(queryParams.get('masternode') === null)){
	    defaultMasternode=queryParams.get('masternode');
//    	    console.log(defaultMasternode);
	}

//	document.getElementById("contractcode").innerHTML='<a href=https://ropsten.etherscan.io/address/'+address+'#code target=_blank>'+address+'</a>';
	document.getElementById("contractcode").innerHTML='<a href=https://etherscan.io/address/'+address+'#code target=_blank>'+address+'</a>';
	var MyContract = web3.eth.contract(abi);
	// instantiate by address
	cI = MyContract.at(address);
//	var contractInstance = web3.eth.contract(abi).at(address);
//	web3.eth.getAccounts((err,res)=>{if(res.length==0){console.log('Metamask error!');}});
	User.defaultAccount = web3.eth.defaultAccount;
	if (User.defaultAccount){
	    var link=window.location.origin+'/?masternode='+User.defaultAccount;
	    document.getElementById("masternodeLink").innerHTML=link;
	    document.getElementById("masternodeLink").setAttribute('href',link);
	}
	web3.eth.getBalance(User.defaultAccount,function(e,r) {User.balance=web3.fromWei(r,'ether');var amount=User.balance*0.99-0.002;amount=(amount<0)?0:amount;document.getElementById("ethamountbuy").value=amount.toFixed(ethnum);UserLog(e,r)});
	cI.myTokens(function(e,r) {User.myTokens=web3.fromWei(r,'ether');document.getElementById("tokenamountsell").value=(User.myTokens*0.9999).toFixed(toknum);UserLog(e,r)});
	cI.totalSupply(function(e,r) {User.totalSupply=web3.fromWei(r,'ether');UserLog(e,r)});
	cI.symbol(function(e,r) {User.symbol=r;UserLog(e,r)});
	cI.refferedBy(User.defaultAccount,function(e,r) {if (r=='0x0000000000000000000000000000000000000000'){User.masternode=defaultMasternode}else{User.masternode=r};document.getElementById("masternode").innerHTML=User.masternode;UserLog(e,r)});
	setInterval(UpdateInfo,1000);
//	UpdateInfo();
}


	function UpdateInfo(){
//	    console.log('1');
//	    console.log(User.totalSupply);

	User.defaultAccount = web3.eth.defaultAccount;
//	console.log(User.defaultAccount);
	web3.eth.getBalance(User.defaultAccount,function(e,r) {if (r==0){return};User.balance=web3.fromWei(r,'ether');UserLog(e,r)});
	cI.totalSupply(function(e,r) {if (r==0){return};User.totalSupply=web3.fromWei(r,'ether');UserLog(e,r)});
//	cI.dividendsOf(User.defaultAccount,function(e,r) {User.dividends=web3.fromWei(r,'ether')});
	cI.myDividends(1,function(e,r) {if (r==0){return};User.dividends=web3.fromWei(r,'ether');UserLog(e,r)});
//	cI.myDividends(0,function(e,r) {User.dividends=web3.fromWei(r,'ether')});
	cI.sellPrice(function(e,r) {if (r==0){return};User.sellPrice=web3.fromWei(r,'ether');UserLog(e,r)});
	cI.buyPrice(function(e,r) {if (r==0){return};User.buyPrice=web3.fromWei(r,'ether');UserLog(e,r)});
	cI.stakingRequirement(function(e,r) {if (r==0){return};User.stakingRequirement=web3.fromWei(r,'ether');UserLog(e,r)});
	cI.totalEthereumBalance(function(e,r) {if (r==0){return};User.totalEthereumBalance=web3.fromWei(r,'ether');UserLog(e,r)});
//	cI.balanceOf(User.defaultAccount,function(e,r) {User.balance=web3.fromWei(r,'ether')});
	cI.myTokens(function(e,r) {if (r==0){return};User.myTokens=web3.fromWei(r,'ether');UserLog(e,r)});
	User.ethequity=User.sellPrice*User.myTokens;
	RefreshView();
	}

	function RefreshView(){
	    UpdateTokenAmount();
	    UpdateETHAmount();
	    UpdateReinvestAmount();
	    document.getElementById("supply").innerHTML = User.totalSupply.toFixed(toknum)+' '+User.symbol;
	    document.getElementById("balance").innerHTML = User.totalEthereumBalance.toFixed(ethnum);
//	    document.getElementById("UserBalance").innerHTML = User.balance.toFixed(ethnum)+' ETH';
	    document.getElementById("UserTokens").innerHTML = User.myTokens.toFixed(toknum);
	    document.getElementById("buyPrice").innerHTML = User.buyPrice.toFixed(ethnum);
	    document.getElementById("sellPrice").innerHTML = User.sellPrice.toFixed(ethnum);
	    document.getElementById("userestimate").innerHTML = User.ethequity.toFixed(ethnum);
//	    document.getElementById("debug").innerHTML='';
	    for (var key in User) {
//		 document.getElementById("debug").innerHTML+=key+' '+User[key]+'<br/>';
//		console.log(key+User[key]);
	    }
	    document.getElementById("reinvest").innerHTML=User.dividends.toFixed(ethnum);
	}

	function buy(){
	    var amountETH=parseFloat(document.getElementById("ethamountbuy").value);
	    console.log(amountETHwei);
	    if (!isNaN(amountETH) && amountETH>0){
		var amountETHwei=web3.toWei(amountETH,'ether');
//		cI.buy(amountETHwei,refferalId,function(e,r) {console.log('buy success!')});
		cI.buy(User.masternode,{value:amountETHwei},function(e,r) {console.log('buy success!');UserLog(e,r)});
	    }
	}

	function sell(){
	    var amountToken=parseFloat(document.getElementById("tokenamountsell").value);
//	    console.log(amountToken);
	    if (!isNaN(amountToken) && amountToken>0){
		var amountTokenwei=web3.toWei(amountToken,'ether');
//	 	console.log(amountTokenwei);
		cI.sell(amountTokenwei,function(e,r) {console.log('sell success!');UserLog(e,r)});
	    }
	}

	function transfer(){
	    var amountToken=parseFloat(document.getElementById("tokenamounttransfer").value);
	    var TokenAddress=document.getElementById("tokenaddress").value;
	    console.log('amountToken : '+amountToken+' address : '+TokenAddress);
	    if (!isNaN(amountToken) && amountToken>0){
		var amountTokenwei=web3.toWei(amountToken,'ether');
		cI.transfer(TokenAddress,amountTokenwei,function(e,r) {console.log('transfer success!');UserLog(e,r)});
	    }
	}

	function reinvest(){
	    if (User.dividends>0)
		cI.reinvest(function(e,r) {console.log('reinvest success!');UserLog(e,r)});
	}

	function withdraw(){
	    if (User.dividends>0)
		cI.withdraw(function(e,r) {console.log('withdraw success!');UserLog(e,r)});
	}

	function UpdateTokenAmount(){
	    var amountETH=parseFloat(document.getElementById("ethamountbuy").value);
	    if (!isNaN(amountETH))
		cI.calculateTokensReceived(web3.toWei(amountETH,'ether'),function(e,r) {if (r==0){return};document.getElementById("tokenamountbuy").innerHTML=web3.fromWei(r,'ether').toFixed(toknum);UserLog(e,r)});
	}

	function UpdateETHAmount(){
	    var amountToken=parseFloat(document.getElementById("tokenamountsell").value);
//	    console.log('amountToken '+amountToken);
	    if (!isNaN(amountToken)){
		if (amountToken>User.myTokens){
		    amountToken=User.myTokens;
		    document.getElementById("tokenamountsell").value=amountToken.toFixed(toknum);
		}
		cI.calculateEthereumReceived(web3.toWei(amountToken,'ether'),function(e,r) {if (r==0){return};document.getElementById("ethamountsell").innerHTML=web3.fromWei(r,'ether').toFixed(ethnum);UserLog(e,r)});
	    }
	}

	function SetMaxSellTokens(){
	    document.getElementById("tokenamountsell").value=User.myTokens.toFixed(toknum);
	}
	

	function UpdateReinvestAmount(){
	    var amountETH=parseFloat(document.getElementById("reinvest").innerHTML);
//	    console.log('amountETH '+amountETH);
	    if (!isNaN(amountETH) && User.buyPrice>0)
		cI.calculateTokensReceived(web3.toWei(amountETH,'ether'),function(e,r) {if (r==0){return};document.getElementById("tokenreinvest").innerHTML=web3.fromWei(r,'ether').toFixed(toknum);UserLog(e,r)});
	}

	function UserLog(e,r){
	    if (e !== null)
		console.log('metamsk error : '+e);
//	    console.log('result is : '+r);
	}
