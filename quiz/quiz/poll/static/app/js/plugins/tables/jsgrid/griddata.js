(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1)
                    && (!filter.Age || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };  

//Assign allowance master to employee START
    var empaldb = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Empname || client.Empname.indexOf(filter.Empname) > -1)
                    && (!filter.Age || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };  
//Assign allowance master to employee END 


//Assign deduction master to employee START
    var empdedb = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Empname || client.Empname.indexOf(filter.Empname) > -1)
                    && (!filter.Age || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };  
//Assign deduction master to employee END 

 //Loan Assign Masters to Employee START
  var loanempdb = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Empname || client.Empname.indexOf(filter.Empname) > -1)
                    && (!filter.Loanname || client.Loanname.indexOf(filter.Loanname) > -1)
                    && (!filter.Loanamount || client.Loanamount.indexOf(filter.Loanamount) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };  
  //Loan Assign Masters to Employee END

  //CTC Assign Masters to Employee START
  var ctcempdb = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Empname || client.Empname.indexOf(filter.Empname) > -1)
                    && (!filter.Ctcname || client.Loanname.indexOf(filter.Loanname) > -1)
                    && (!filter.Ctcvalue || client.Loanamount.indexOf(filter.Loanamount) > -1);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };  
  //CTC Assign Masters to Employee END



    var ctcdb = {
        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1);
                    // && (!filter.Age || client.Age === filter.Age)
                    // && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    // && (!filter.Country || client.Country === filter.Country)
                    // && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }
    };  

      var loandb = {
        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1);
                    // && (!filter.Age || client.Age === filter.Age)
                    // && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    // && (!filter.Country || client.Country === filter.Country)
                    // && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }
    }; 

      window.db = db;
      window.ctcdb = ctcdb;
      window.loandb = loandb;
      window.empaldb = empaldb;
      window.empdedb = empdedb;
    window.loanempdb = loanempdb;
    window.ctcempdb = ctcempdb;

//ctcdb
ctcdb.clients =[
      
         {
            "Name": "Basic",            
            "Value": "124500"
        },
        {
            "Name": "Wages",            
            "Value": "5500"
        },
         {
            "Name": "Stipend",          
            "Value": "75500"
        },
         {
            "Name": "DRA",           
            "Value": "755500"
        }
     ];

//ctcdb


//loandb
  loandb.emi = [
        { Name: "", Id: 0 },
        { Name: "EMI", Id: 1 },
        { Name: "NON-EMI", Id: 2 }
    ];
loandb.clients =[      
        {
            "Name": "Car Loan",            
            "Value": "55000000000000",
            "Type" : 2
        },
        {
            "Name": "Home Loan",            
            "Value": "77000000000000",
            "Type" : 1
        },
        
        
     ];

//loandb


    db.countries = [
        { Name: "", Id: 0 },
        { Name: "United States", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "United Kingdom", Id: 3 },
        { Name: "France", Id: 4 },
        { Name: "Brazil", Id: 5 },
        { Name: "China", Id: 6 },
        { Name: "Russia", Id: 7 }
    ];


      db.typeal = [
        { Name: "", Id: 0 },
        { Name: "Type 1", Id: 1 },
        { Name: "Type 2", Id: 2 },
        { Name: "Type 3", Id: 3 }
    ];

       db.frequency = [
        { Name: "", Id: 0 },
        { Name: "Yearly", Id: 1 },
        { Name: "Quaterly", Id: 2 }
    ];

    db.clients = [
      
         {
            "Name": "Books and Periodicals",
            "Type": 1,
            "Frequency": 2,
            "Value": "4500"
        },
        {
            "Name": "Test 2 and Periodicals",
            "Type": 2,
            "Frequency": 1,
            "Value": "5500"
        },
         {
            "Name": "Travel",
            "Type": 3,
            "Frequency": 1,
            "Value": "75500"
        },
         {
            "Name": "Expense",
            "Type": 3,
            "Frequency": 1,
            "Value": "755500"
        }
     ];


      empaldb.typeal = [
        { Name: "", Id: 0 },
        { Name: "Type 1", Id: 1 },
        { Name: "Type 2", Id: 2 },
        { Name: "Type 3", Id: 3 }
    ];

       empaldb.frequency = [
        { Name: "", Id: 0 },
        { Name: "Yearly", Id: 1 },
        { Name: "Quaterly", Id: 2 }
    ];

    empaldb.clients = [
      
         {
            "Empname": "Madhumita Chatterjee",
            "Alname" : "Travel Allowance",
            "Type": 1,
            "Frequency": 2,
            "Value": "4500"
        },
         {
            "Empname": "Jenniffer D'slva",
            "Alname" : "Travel Allowance",
            "Type": 1,
            "Frequency": 2,
            "Value": "4425500"
        },
         {
            "Empname": "Mumbai Designers",
            "Alname" : "Trip Allowance",
            "Type": 2,
            "Frequency": 1,
            "Value": "785500"
        },
         {
            "Empname": "Pune Engineers",
            "Alname" : "Education",
            "Type": 2,
            "Frequency": 1,
            "Value": "22500"
        }
     ];


 empdedb.typeal = [
        { Name: "", Id: 0 },
        { Name: "Type 1", Id: 1 },
        { Name: "Type 2", Id: 2 },
        { Name: "Type 3", Id: 3 }
    ];

       empdedb.frequency = [
        { Name: "", Id: 0 },
        { Name: "Yearly", Id: 1 },
        { Name: "Quaterly", Id: 2 }
    ];

    empdedb.clients = [
      
         {
            "Empname": "Madhumita Chatterjee",
            "Dename" : "Travel Allowance",
            "Type": 1,
            "Frequency": 2,
            "Value": "4500"
        },
         {
            "Empname": "Jenniffer D'slva",
            "Dename" : "Travel Allowance",
            "Type": 1,
            "Frequency": 2,
            "Value": "4425500"
        },
         {
            "Empname": "Mumbai Designers",
            "Dename" : "Trip Allowance",
            "Type": 2,
            "Frequency": 1,
            "Value": "785500"
        },
         {
            "Empname": "Pune Engineers",
            "Dename" : "Education",
            "Type": 2,
            "Frequency": 1,
            "Value": "22500"
        }
     ];

     loanempdb.clients = [
      
         {
            "Empname": "Madhumita Chatterjee",
            "Loanname" : "Car Loan",
            "Loanamount": " 300,000 ",
            "Sanctiondate": "1 Feb 2018",
            "Roi": "8.5%",
            "Sroi" : "2%"
        },
          {
            "Empname": "Mark Reiner",
            "Loanname" : "House Loan",
            "Loanamount": "6, 300,000 ",
            "Sanctiondate": "1 Feb 2018",
            "Roi": "8.5%",
            "Sroi" : "2%"
        }
     ];

     ctcempdb.clients = [
      
         {
            "Empname": "Mumbai Front-end Developers",
            "Ctcname" : "Basic",
            "Ctcvalue": " 300,000,000 "
        },
            {
            "Empname": "Pune Designers",
            "Ctcname" : "Basic",
            "Ctcvalue": " 300,000,000 "
        },
     ];

     

}());
