var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }else{
            this.percentage = -1;
        }
    }
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems:{
            exp: [],
            inc: [],
        },
        totals:{
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: 0
    };
    
    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(c, i, a){
            sum += c.value;
        });
        data.totals[type] = sum;
    };
    
    return{
        addItem: function(type, des, val){
            var newItem;
            //Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }
            //Create new Item
            if (type === 'exp'){
                newItem = new Expense(ID, des, val)
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val)
            }
            
            //Enter into data
            data.allItems[type].push(newItem);
            return newItem;
        },
        deleteItem: function(type, id){
            var ids, index;
            ids = data.allItems[type].map(function(cur, i, a){
                return cur.id;
            })
            index = ids.indexOf(id);
            if (index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function(){
            
            //calculate total income expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //calculate budget income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            //calculate percent of income spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = 0;
            }
        },
        calculatePercentages: function(){
            data.allItems.exp.forEach(function(c,i,a){
                c.calcPercentage(data.totals.inc);
            })    
        },
        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(c,i,a){
                return c.getPercentage();
            });
            return allPerc;
        },
        getBudget: function(){
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp
            }
        }
        
    };
})();

var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month',
    }
    var formatNumber = function(num, type){
            var numSplit, int, dec, sign;
            num = Math.abs(num);
            num = num.toFixed(2);
            numSplit = num.split('.');
            int = numSplit[0];
            dec = numSplit[1];
            if (int.length > 3){
                int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
            }
            type === 'exp' ? sign = '-' : sign = '+';
            return sign + ' ' + int + '.' + dec;
    };
    var nodeListForEach = function(list, callback){
           for(var i = 0; i < list.length; i++){
               callback(list[i], i);
           }
    };
    //Things other controllers can use:
    return{
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value, //inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        },
        addListItem: function(obj, type){
            var html, newHtml, element;
            // Create HTML string with placeholder text
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div></div>';
            }else if (type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            //Replace placeholder text with data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            //insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields: function(){
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array){
                current.value = '';
            });
            fieldsArr[0].focus();
        },
        displayBudget: function(obj){
            obj.budget >= 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            };
        },
        removeListItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);  
        },
        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);
            nodeListForEach(fields, function(c, i){
                if(percentages[i] > 0){
                    c.textContent = percentages[i] + '%';
                }else {
                    c.textContent = '---';
                };
            });
        },
        displayMonth: function(){
            var now, year, month, months;
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', "July", 'Sep', 'Oct', 'Nov', 'Dec']
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },
        changedType: function(){
            var fields = document.querySelectorAll(
            DOMstrings.inputType + ',' + 
            DOMstrings.inputDescription + ',' +
            DOMstrings.inputValue);
            nodeListForEach(fields, function(c,i,a){
               c.classList.toggle('red-focus');
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');      
        }
        
    };
})();

var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        };
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };
    var updatePercentages = function(){
        //1. calc %
        budgetCtrl.calculatePercentages();
        //2. read from budget controller
        var percentages = budgetCtrl.getPercentages();
        //3. update UI
        UICtrl.displayPercentages(percentages);
    }
    var updateBudget = function(){
        //1. calc budget
        budgetCtrl.calculateBudget();
        //2. return budget
        var budget = budgetCtrl.getBudget();
        //3. display budget
        UICtrl.displayBudget(budget);
    };
    var ctrlAddItem = function() {
        var input, newItem;
        //1. Get field input data
        input = UICtrl.getInput();
        if(input.description !== '' && !isNaN(input.value) && input.value > 0){
            //2. Add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            //3. Add item to the UI
            UICtrl.addListItem(newItem, input.type);
            //3.5 Clear Fields
            UICtrl.clearFields();
            //4. update budget
            updateBudget();
            // update %
            updatePercentages();
        }
    };
    
    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemID){
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //1. delete from the data structure
            budgetCtrl.deleteItem(type, ID);
            //2. delete from UI
            UICtrl.removeListItem(itemID);
            //3 update and show new budget
            updateBudget();
            // update %
            updatePercentages();
        }
    }
    
    
    return{
       init: function(){
           console.log('Application has started.');
           setupEventListeners();
           UICtrl.displayMonth();
           UICtrl.displayBudget({
                budget: 0,
                percentage: 0,
                totalInc: 0,
                totalExp: 0});
       }    
        
    }
})(budgetController, UIController);

controller.init();