import React from 'react';

class Counter extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            count:0
        }
    }


        increment = ()=>{

        this.setState({

            count:this.state.count + 1
        })


        }
        decrement = ()=>{

            this.setState({
    
                count:this.state.count -1 >0?this.state.count-1:0
            })
    
    
            }

        reset = ()=>{

                this.setState({
        
                    count:0
                
                })
        
        
                }
        onInputChange(event) {

            const value = event.target.value;
    
            this.setState({
                count: value
            })
        };

            
    

    render(){

        const isEven = this.state.count % 2 === 0;

        return(
            <div>
                <p>This is state for the counter: {this.state.count} </p><span>This count number is:{isEven?'Even':'Odd'}</span><br/>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <input type="number" onChange={this.onInputChange.bind(this)}></input>
            </div>
           
        )
    }

   

}

export default Counter;