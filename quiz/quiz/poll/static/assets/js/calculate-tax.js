
var old_tax_master = [
     {"systemCode" : "INTAX", "LowerLimit":0, "UpperLimit":250000,"MaxLimit":0,"Percentage":0}
    ,{"systemCode" : "INTAX", "LowerLimit":250001, "UpperLimit":500000,"MaxLimit":-12500,"Percentage":5}
    ,{"systemCode" : "INTAX", "LowerLimit":500001, "UpperLimit":1000000,"MaxLimit":12500,"Percentage":20}
    ,{"systemCode" : "INTAX", "LowerLimit":1000001, "UpperLimit":9999999999,"MaxLimit":112500,"Percentage":30}
    ,{"systemCode":"SNTAX","LowerLimit":0,"UpperLimit":300000,"MaxLimit":0,"Percentage":0}
    ,{"systemCode":"SNTAX","LowerLimit":300001,"UpperLimit":500000,"MaxLimit":-10000,"Percentage":5}
    ,{"systemCode":"SNTAX","LowerLimit":500001,"UpperLimit":1000000,"MaxLimit":10000,"Percentage":20}
    ,{"systemCode":"SNTAX","LowerLimit":1000001,"UpperLimit":9999999999,"MaxLimit":110000,"Percentage":30}
    ,{"systemCode":"INCES","LowerLimit":0,"UpperLimit":9999999999,"MaxLimit":0,"Percentage":4}
    ,{"systemCode":"INSUR","LowerLimit":0,"UpperLimit":5000000,"MaxLimit":0,"Percentage":0}
    ,{"systemCode":"INSUR","LowerLimit":5000001,"UpperLimit":10000000,"MaxLimit":0,"Percentage":10}
    ,{"systemCode":"INSUR","LowerLimit":10000001,"UpperLimit":20000000,"MaxLimit":0,"Percentage":15}
    ,{"systemCode":"INSUR","LowerLimit":20000001,"UpperLimit":50000000,"MaxLimit":0,"Percentage":25}
    ,{"systemCode":"INSUR","LowerLimit":50000001,"UpperLimit":9999999999,"MaxLimit":0,"Percentage":37}
    ,{"systemCode":"SSTAX","LowerLimit":0,"UpperLimit":"500000","MaxLimit":0,"Percentage":0}
    ,{"systemCode":"SSTAX","LowerLimit":500001,"UpperLimit":"1000000","MaxLimit":0,"Percentage":20}
    ,{"systemCode":"SSTAX","LowerLimit":1000001,"UpperLimit":"99999999","MaxLimit":100000,"Percentage":30}
]

var new_tax_master =[
    {"systemCode":"INTAXN","LowerLimit":0,"UpperLimit":250000,"MaxLimit":0,"Percentage":0}
,{"systemCode":"INTAXN","LowerLimit":250001,"UpperLimit":500000,"MaxLimit":-12500,"Percentage":5}
,{"systemCode":"INTAXN","LowerLimit":500001,"UpperLimit":750000,"MaxLimit":12500,"Percentage":10}
,{"systemCode":"INTAXN","LowerLimit":750001,"UpperLimit":1000000,"MaxLimit":37500,"Percentage":15}
,{"systemCode":"INTAXN","LowerLimit":1000001,"UpperLimit":1250000,"MaxLimit":75000,"Percentage":20}
,{"systemCode":"INTAXN","LowerLimit":1250001,"UpperLimit":1500000,"MaxLimit":125000,"Percentage":25}
,{"systemCode":"INTAXN","LowerLimit":1500001,"UpperLimit":9999999999,"MaxLimit":187500,"Percentage":30}
,{"systemCode":"SNTAXN","LowerLimit":0,"UpperLimit":300000,"MaxLimit":0,"Percentage":0}
,{"systemCode":"SNTAXN","LowerLimit":300001,"UpperLimit":500000,"MaxLimit":-10000,"Percentage":5}
,{"systemCode":"SNTAXN","LowerLimit":500001,"UpperLimit":750000,"MaxLimit":10000,"Percentage":10}
,{"systemCode":"SNTAXN","LowerLimit":750001,"UpperLimit":1000000,"MaxLimit":35000,"Percentage":15}
,{"systemCode":"SNTAXN","LowerLimit":1000001,"UpperLimit":1250000,"MaxLimit":72500,"Percentage":20}
,{"systemCode":"SNTAXN","LowerLimit":1250001,"UpperLimit":1500000,"MaxLimit":122500,"Percentage":25}
,{"systemCode":"SNTAXN","LowerLimit":1500001,"UpperLimit":9999999999,"MaxLimit":185000,"Percentage":30}
,{"systemCode":"SSNTAXN","LowerLimit":0,"UpperLimit":500000,"MaxLimit":0,"Percentage":0}
,{"systemCode":"SSNTAXN","LowerLimit":500001,"UpperLimit":750000,"MaxLimit":0,"Percentage":10}
,{"systemCode":"SSNTAXN","LowerLimit":750001,"UpperLimit":1000000,"MaxLimit":25000,"Percentage":15}
,{"systemCode":"SSNTAXN","LowerLimit":1000001,"UpperLimit":1250000,"MaxLimit":62500,"Percentage":20}
,{"systemCode":"SSNTAXN","LowerLimit":1250001,"UpperLimit":1500000,"MaxLimit":112500,"Percentage":25}
,{"systemCode":"SSNTAXN","LowerLimit":1500001,"UpperLimit":9999999999,"MaxLimit":175000,"Percentage":30}
]

function formatAmount(amount){
    return parseFloat(amount).toLocaleString('en-IN',{ minimumFractionDigits: 0 });
}
function calculateTax() {
    // Age
    var age = $("input[name='age']:checked").val()

    // Income
    var income_from_gross = $("#income-from-salary").val().replace(/,/g, '').trim() === '' ? 0 : $("#income-from-salary").val().replace(/,/g, '');
    var income_from_flexi = $("#income-from-flexi").val().replace(/,/g, '').trim() === '' ? 0 : $("#income-from-flexi").val().replace(/,/g, '');
    var income_from_interest = $("#income-from-interest").val().replace(/,/g, '').trim() === '' ? 0 : $("#income-from-interest").val().replace(/,/g, '');
    var income_from_other = $("#income-from-other").val().replace(/,/g, '').trim() === '' ? 0 : $("#income-from-other").val().replace(/,/g, '');

    // Deduction
    var deduction_on_income = $("#ded-on-income").val().replace(/,/g, '').trim() === '' ? 0 : $("#ded-on-income").val().replace(/,/g, '');
    var standard_deduction = $("#standard-deduction").val().replace(/,/g, '').trim() === '' ? 0 : $("#standard-deduction").val().replace(/,/g, '');
    var prof_tax = $("#prof-tax").val().replace(/,/g, '').trim() === '' ? 0 : $("#prof-tax").val().replace(/,/g, '');


    // Property 1
    var property_1_type = $("input[name='property1']:checked").val()
    var property_1_house_loan = $("#property-1-house-loan").val().replace(/,/g, '').trim() === '' ? 0 : $("#property-1-house-loan").val().replace(/,/g, '');
    var property_1_house_rent = $("#property-1-house-rent").val().replace(/,/g, '').trim() === '' ? 0 : $("#property-1-house-rent").val().replace(/,/g, '');
    var property_1_house_tax = $("#property-1-house-tax").val().replace(/,/g, '').trim() === '' ? 0 : $("#property-1-house-tax").val().replace(/,/g, '');

    // Property 2
    var property_2_type = $("input[name='property2']:checked").val()
    var property_2_house_loan = $("#property-2-house-loan").val().replace(/,/g, '').trim() === '' ? 0 : $("#property-2-house-loan").val().replace(/,/g, '');
    var property_2_house_rent = $("#property-2-house-rent").val().replace(/,/g, '').trim() === '' ? 0 : $("#property-2-house-rent").val().replace(/,/g, '');
    var property_2_house_tax = $("#property-2-house-tax").val().replace(/,/g, '').trim() === '' ? 0 : $("#property-2-house-tax").val().replace(/,/g, '');

    // Exemptions
    var deduction_80c = $("#deduction-80c").val().replace(/,/g, '').trim() === '' ? 0 : $("#deduction-80c").val().replace(/,/g, '');
    var deduction_ccd1 = $("#deduction-ccd1").val().replace(/,/g, '').trim() === '' ? 0 : $("#deduction-ccd1").val().replace(/,/g, '');
    var deduction_80d = $("#deduction-80d").val().replace(/,/g, '').trim() === '' ? 0 : $("#deduction-80d").val().replace(/,/g, '');
    var deduction_80ccd2 = $("#deduction-80ccd2").val().replace(/,/g, '').trim() === '' ? 0 : $("#deduction-80ccd2").val().replace(/,/g, '');
    var deduction_80tta = $("#deduction-80tta").val().replace(/,/g, '').trim() === '' ? 0 : $("#deduction-80tta").val().replace(/,/g, '');
    var deduction_other = $("#deduction-other").val().replace(/,/g, '').trim() === '' ? 0 : $("#deduction-other").val().replace(/,/g, '');



    // SUMMARY TABLE 1

    $("#summary-1-income-gross").text('₹ ' + formatAmount(income_from_gross));
    $("#summary-2-income-gross").text('₹ ' + formatAmount(income_from_gross));

    $("#summary-2-income-flexi").text('₹ ' + formatAmount(income_from_flexi));

    $("#summary-1-income-other").text('₹ ' + formatAmount(income_from_other));
    $("#summary-2-income-other").text('₹ ' + formatAmount(income_from_other));


    $("#summary-1-income-interest").text('₹ ' + formatAmount(income_from_interest));
    $("#summary-2-income-interest").text('₹ ' + formatAmount(income_from_interest));

    $("#summary-1-ded-gross").text('₹ ' + formatAmount(deduction_on_income));
    standard_deduction  =standard_deduction > 50000 ? 50000: standard_deduction;
    $("#summary-1-ded-standard").text('₹ ' + formatAmount(standard_deduction));
    $("#summary-1-ded-pt").text('₹ ' + formatAmount(prof_tax));

     // NET INCOME [A]
    var net_income_1 = parseInt(income_from_gross) + parseInt(income_from_interest) +parseInt(income_from_other)
        - parseInt(deduction_on_income) -parseInt(standard_deduction) -parseInt(prof_tax)

    var net_income_2 = parseInt(income_from_gross) + parseInt(income_from_flexi)+parseInt(income_from_interest) +
        parseInt(income_from_other)


    $("#summary-1-net-income").text('₹ ' + formatAmount(net_income_1));
    $("#summary-2-net-income").text('₹ ' + formatAmount(net_income_2));

    // SUMMARY TABLE 2
    var net_income_from_house = 0
    if(property_1_type === '0'){
         property_1_house_loan  =property_1_house_loan > 200000? 200000: property_1_house_loan;
         net_income_from_house+=parseInt(property_1_house_loan)
         $("#summary-1-property-1-self-interest").text('₹ ' + formatAmount(property_1_house_loan));

    }else{
         $("#summary-1-property-1-letout-interest").text('₹ ' + formatAmount(property_1_house_loan));
         $("#summary-1-property-1-letout-rent").text('₹ ' + formatAmount(property_1_house_rent));
         $("#summary-1-property-1-letout-tax").text('₹ ' + formatAmount(property_1_house_tax));
         var prop_1_loss = parseInt(property_1_house_loan) - (( parseInt(property_1_house_rent) -  parseInt(property_1_house_tax) )*0.7)
         prop_1_loss  =prop_1_loss > 200000 ? 200000: prop_1_loss;
          net_income_from_house+=parseInt(prop_1_loss)
        $("#summary-1-property-1-letout-income").text('₹ ' + formatAmount(prop_1_loss));


    }
    if(property_2_type === '0'){
         property_2_house_loan  =property_2_house_loan > 200000? 200000: property_2_house_loan;
         net_income_from_house+=parseInt(property_2_house_loan)
         $("#summary-1-property-2-self-interest").text('₹ ' + formatAmount(property_2_house_loan));

    }else{
         $("#summary-1-property-2-letout-interest").text('₹ ' + formatAmount(property_2_house_loan));
         $("#summary-1-property-2-letout-rent").text('₹ ' + formatAmount(property_2_house_rent));
         $("#summary-1-property-2-letout-tax").text('₹ ' + formatAmount(property_2_house_tax));
         var prop_2_loss = parseInt(property_2_house_loan) - (( parseInt(property_2_house_rent) -  parseInt(property_2_house_tax) )*0.7)
         prop_2_loss  =prop_2_loss > 200000? 200000: prop_2_loss;
         net_income_from_house+=parseInt(prop_2_loss)
        $("#summary-1-property-2-letout-income").text('₹ ' + formatAmount(prop_2_loss));

    }
    $("#summary-1-net-house").text('₹ ' + formatAmount(net_income_from_house));

//     SUMMARY TABLE 3
    deduction_80c  = deduction_80c > 150000? 150000: deduction_80c;
    $("#summary-1-ded-80c").text('₹ ' + formatAmount(deduction_80c));
    deduction_ccd1  = deduction_ccd1 > 50000? 50000: deduction_ccd1;
    $("#summary-1-ded-80ccd1").text('₹ ' + formatAmount(deduction_ccd1));
    deduction_80d  = deduction_80d > 100000? 100000: deduction_80d;
    $("#summary-1-ded-80d").text('₹ ' + formatAmount(deduction_80d));
    $("#summary-1-ded-80ccd2").text('₹ ' + formatAmount(deduction_80ccd2));
    $("#summary-2-ded-80ccd2").text('₹ ' + formatAmount(deduction_80ccd2));
     deduction_80tta  = deduction_80tta > 10000? 10000: deduction_80tta;
    $("#summary-1-ded-80tta").text('₹ ' + formatAmount(deduction_80tta));
    $("#summary-2-ded-80tta").text('₹ ' + formatAmount(deduction_80tta));
    $("#summary-1-ded-other").text('₹ ' + formatAmount(deduction_other));

     // NET DEDUCTIONS C

    var net_deductions_1 = parseInt(deduction_80c) + parseInt(deduction_ccd1) +parseInt(deduction_80d)
        + parseInt(deduction_80ccd2) +parseInt(deduction_80tta) +parseInt(deduction_other)

   var net_deductions_2 = parseInt(deduction_80ccd2) +parseInt(deduction_80tta)


    $("#summary-1-net-ded").text('₹ ' + formatAmount(net_deductions_1));
    $("#summary-2-net-ded").text('₹ ' + formatAmount(net_deductions_2));


    //     SUMMARY TABLE 4
    $("#summary-1-tax-netincome").text('₹ ' + formatAmount(net_income_1));
    $("#summary-2-tax-netincome").text('₹ ' + formatAmount(net_income_2));
    $("#summary-1-tax-houseincome").text('₹ ' + formatAmount(net_income_from_house));
    $("#summary-1-tax-netdeduction").text('₹ ' + formatAmount(net_deductions_1));
    $("#summary-2-tax-netdeduction").text('₹ ' + formatAmount(net_deductions_2));

    var total_taxable_income_1= net_income_1 - net_income_from_house - net_deductions_1
    var total_taxable_income_2= net_income_2 -  net_deductions_2

    $("#summary-1-tax-taxableincome").text('₹ ' + formatAmount(total_taxable_income_1));
    $("#summary-2-tax-taxableincome").text('₹ ' + formatAmount(total_taxable_income_2));



//    GET TAX
    var systemCodeOld = "INTAX";
    var systemCodeNew = "INTAXN";
    if (age === '79') {
        systemCodeOld = "SNTAX";
        systemCodeNew = "SNTAXN";
    } else if (age === '80') {
        systemCodeOld = "SSTAX";
        systemCodeNew = "SSNTAXN";
    } else {
    }

    var old_tax =  old_tax_master.filter(function(tax_obj) {
	return tax_obj.systemCode===systemCodeOld && tax_obj.LowerLimit <= total_taxable_income_1 && tax_obj.UpperLimit >=total_taxable_income_1
});

    var new_tax =  new_tax_master.filter(function(tax_obj) {
	return tax_obj.systemCode===systemCodeNew && tax_obj.LowerLimit <= total_taxable_income_2 && tax_obj.UpperLimit >=total_taxable_income_2
});
    if (old_tax.length === 1){

    var  basic_tax_1 = old_tax[0].MaxLimit + ((total_taxable_income_1 - old_tax[0].LowerLimit)* (old_tax[0].Percentage *0.01))
        basic_tax_1 = Math.ceil(basic_tax_1);
     $("#summary-1-tax-basictax").text('₹ ' + formatAmount(basic_tax_1));
        var surcharge_net = 0
        var edu_cess = 0
      var surcharge =  old_tax_master.filter(function(tax_obj) {
	    return tax_obj.systemCode==="INSUR" && tax_obj.LowerLimit <= total_taxable_income_1 && tax_obj.UpperLimit >=total_taxable_income_1
      });
      if (surcharge.length === 1){
         surcharge_net= basic_tax_1 * (surcharge[0].Percentage * 0.01)
        var diff_over_lower = total_taxable_income_1 - surcharge[0].LowerLimit + 1
        var marginal_relief_limit = diff_over_lower * 0.7

         var  income_tax_gross_on_lower =total_taxable_income_1 - old_tax[0].LowerLimit - diff_over_lower
         var  income_tax_on_lower = (old_tax[0].Percentage*0.01*(total_taxable_income_1 - old_tax[0].LowerLimit - diff_over_lower))+ old_tax[0].MaxLimit
          var surcharge_lower =  old_tax_master.filter(function(tax_obj) {
	    return tax_obj.systemCode==="INSUR" && tax_obj.LowerLimit <= income_tax_gross_on_lower && tax_obj.UpperLimit >=income_tax_gross_on_lower
      });
          if(surcharge_lower.length === 1) {
              var surcharge_on_lower = income_tax_on_lower * (surcharge_lower[0].Percentage * 0.01)
              if (surcharge_net > surcharge_on_lower + marginal_relief_limit) {
                  surcharge_net = surcharge_on_lower + marginal_relief_limit
              }
          }
        surcharge_net = Math.ceil(surcharge_net);
        basic_tax_1 = basic_tax_1 + surcharge_net
        if (basic_tax_1 < 0){
            basic_tax_1 = 0
        }else{
             var incess =  old_tax_master.filter(function(tax_obj) {
                return tax_obj.systemCode==="INCES"
              });
             if (incess.length === 1) {
                  edu_cess =basic_tax_1*incess[0].Percentage*0.01
             }
        }
        edu_cess = Math.ceil(edu_cess);
        var income_tax_net  = edu_cess + basic_tax_1
        $("#summary-1-tax-surcharge").text('₹ ' + formatAmount(surcharge_net));
         $("#summary-1-tax-cess").text('₹ ' + formatAmount(edu_cess));
         $("#summary-1-tax-totaltax").text('₹ ' + formatAmount(income_tax_net));
      }


    }
    if (new_tax.length === 1){
    var  basic_tax_2 = new_tax[0].MaxLimit + ((total_taxable_income_2 - new_tax[0].LowerLimit) * (new_tax[0].Percentage *0.01))
        basic_tax_2 = Math.ceil(basic_tax_2);
     $("#summary-2-tax-basictax").text('₹ ' + formatAmount(basic_tax_2));
        var surcharge_net_new = 0
        var edu_cess_new = 0
      var surcharge_new =  old_tax_master.filter(function(tax_obj) {
	    return tax_obj.systemCode==="INSUR" && tax_obj.LowerLimit <= total_taxable_income_2 && tax_obj.UpperLimit >=total_taxable_income_2
      });
      if (surcharge_new.length === 1){
         surcharge_net_new= basic_tax_2 * (surcharge_new[0].Percentage * 0.01)
        var diff_over_lower_new = total_taxable_income_2 - surcharge_new[0].LowerLimit + 1
        var marginal_relief_limit_new = diff_over_lower_new * 0.7

         var  income_tax_gross_on_lower_new =total_taxable_income_2 - new_tax[0].LowerLimit - diff_over_lower_new
         var  income_tax_on_lower_new = (new_tax[0].Percentage*0.01*(total_taxable_income_2 - new_tax[0].LowerLimit - diff_over_lower_new))+ new_tax[0].MaxLimit
          var surcharge_lower_new =  old_tax_master.filter(function(tax_obj) {
	    return tax_obj.systemCode==="INSUR" && tax_obj.LowerLimit <= income_tax_gross_on_lower_new && tax_obj.UpperLimit >=income_tax_gross_on_lower_new
      });
         if(surcharge_lower_new.length === 1){
             var surcharge_on_lower_new= income_tax_on_lower_new * (surcharge_lower_new[0].Percentage * 0.01)
          if (surcharge_net_new > surcharge_on_lower_new + marginal_relief_limit_new){
            surcharge_net_new = surcharge_on_lower_new + marginal_relief_limit_new
        }
         }

      surcharge_net_new = Math.ceil(surcharge_net_new);
        basic_tax_2 = basic_tax_2 + surcharge_net_new
        if (basic_tax_2 < 0){
            basic_tax_2 = 0
        }else{
             var incess_new =  old_tax_master.filter(function(tax_obj) {
                return tax_obj.systemCode==="INCES"
              });
             if (incess_new.length === 1) {
                  edu_cess_new =basic_tax_2*incess_new[0].Percentage*0.01
             }
        }
        edu_cess_new = Math.ceil(edu_cess_new);
        var income_tax_net_new  = edu_cess_new + basic_tax_2
        $("#summary-2-tax-surcharge").text('₹ ' + formatAmount(surcharge_net_new));
         $("#summary-2-tax-cess").text('₹ ' + formatAmount(edu_cess_new));
         $("#summary-2-tax-totaltax").text('₹ ' + formatAmount(income_tax_net_new));
      }
    }






}
function formatValue(event){
    var number = $(event).val().replace(/,/g, '')
    if(number==='' || isNaN(parseFloat(number))){
        number = 0
    }
    $(event).val(parseFloat(number).toLocaleString('en-IN',{ minimumFractionDigits: 0 }));
}
