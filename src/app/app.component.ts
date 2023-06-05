import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task5';
  getProgressBarStyles(completion: number) {
    let color,gradient;
    if (completion >100) {
      color = '#00B3FF';
      
    }
  
    return {
      'accent-Color': color,
      'height': '20px',
     
    };
  }
  UserData = [
    {Class:'Gaming PC',Gender:'',COMPLETION:309},
    {Class:'New house',Gender:'',COMPLETION:950},
    {Class:'Summer trip',Gender:'',COMPLETION:550},
    {Class:'Wedding',Gender:'',COMPLETION:620},
    {Class:'Top up game',Gender:'',COMPLETION:170},
    
    
  ]
  HistoryData = [
    { Class: 'Order Revenue', date: 'Apr 27, 22', Gender: '+ $874', transactionType: 'Send Money' },
    { Class: 'Send Money', date: 'May 19, 23',Gender: '+ $374', transactionType: 'Send Money' },
    { Class: 'Send Money', date: 'april 22, 21',Gender: '- $2490', transactionType: 'withdraw Money' },
    { Class: 'Send Money', date: 'Aug 11, 20',Gender: '+ $126', transactionType: 'Send Money' },
  ];
  
  sendAmount: string = '';
  sendDate: string = '';
  sendType: string = '';
  sendingMoney: boolean = false;
sendError: string = '';
  
  onAmountChange(event: any) {
    this.sendAmount = event.target.value;
  }
  
  
  sendMoney() {
    if (this.sendAmount !== '') {
      this.sendingMoney = true;
      this.sendError = '';
  
      setTimeout(() => {
        const success = Math.random() < 0.5;
  
        if (success) {
          this.sendDate = new Date().toLocaleDateString();
          this.sendType = 'Send Money';
  
          
          this.HistoryData.push({
            Class: this.sendType,
            date: this.sendDate,
            Gender: `+ $${this.sendAmount}`,
            transactionType: 'Send Money'
          });
  
        
          this.sendAmount = '';
  
        } else {
          this.sendError = 'Failed to send money. Please try again.';
        }
  
        this.sendingMoney = false;
      }, 2000);
    }
  }
  
}



