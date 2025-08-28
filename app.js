        document.addEventListener('DOMContentLoaded', function() {
            const incomeInput = document.getElementById('income');
            
            function updateBudget() {
                const income = parseFloat(incomeInput.value) || 0;
                
                document.getElementById('necessidades').value = (income * 0.5).toFixed(2);
                document.getElementById('poupanca').value = (income * 0.2).toFixed(2);
                document.getElementById('desejos').value = (income * 0.2).toFixed(2);
                document.getElementById('doacoes').value = (income * 0.1).toFixed(2);
                
                document.getElementById('result-necessidades').textContent = `R$ ${(income * 0.5).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('result-poupanca').textContent = `R$ ${(income * 0.2).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('result-desejos').textContent = `R$ ${(income * 0.2).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('result-doacoes').textContent = `R$ ${(income * 0.1).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('result-total').textContent = `R$ ${income.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
            }
            
            incomeInput.addEventListener('input', updateBudget);
            updateBudget();
            calculateInvestment();
        });
        
        function calculateInvestment() {
            const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value) || 0;
            const annualRate = parseFloat(document.getElementById('interest-rate').value) || 0;
            
            const monthlyRate = annualRate / 100 / 12;
            
            function calculateFutureValue(years) {
                const months = years * 12;
                const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
                return futureValue;
            }
            
            const year1 = calculateFutureValue(1);
            const year5 = calculateFutureValue(5);
            const year10 = calculateFutureValue(10);
            
            document.getElementById('result-1year').textContent = `R$ ${year1.toLocaleString('pt-BR', {maximumFractionDigits: 0})}`;
            document.getElementById('result-5year').textContent = `R$ ${year5.toLocaleString('pt-BR', {maximumFractionDigits: 0})}`;
            document.getElementById('result-10year').textContent = `R$ ${year10.toLocaleString('pt-BR', {maximumFractionDigits: 0})}`;
        }