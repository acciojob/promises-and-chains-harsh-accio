//your JS code here. If required.
const form = document.getElementById('form');
form.addEventListener('submit',(event)=>{
	event.preventDefault(); 
	const age = document.getElementById('age').value.trim();
	const name = document.getElementById('name').value.trim();

	if(age=='' || name==''){
		alert("Please enter valid details")
	}
	else{
		setTimeout(()=>{
			if(Number(age)>18){
				alert(`Welcome, ${name}. You can vote.`)
			}
			else{
				alert(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000)
	}
})