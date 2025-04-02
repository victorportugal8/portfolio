valorWons = prompt("Digite um valor em wons coreanos: ")

// Conversão de wons coreanos para reais
taxaConversaoReal = 0.00035
valorReais = valorWons * taxaConversaoReal
alert(`O valor em reais é: R$ ${valorReais.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)

// Conversão de wons coreanos para dólares
taxaConversaoDolar = 0.00028
valorDolares = valorWons * taxaConversaoDolar
alert(`O valor em dólar é: US$ ${valorDolares.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)

// Conversão de wons coreanos para euros
taxaConversaoEuro = 0.00023
valorEuros = valorWons * taxaConversaoEuro
alert(`O valor em euro é: € ${valorEuros.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)