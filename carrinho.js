var atualizaDados = function() {
        var carrinhos = $(".carrinho");
        carrinhos.each(function(key,value) {
            var carrinho = $(this);
            var total = 0;
            var items = carrinho.find(".item-total:visible");

            for(var i = 0; i < items.length;i++) {
                var $item = $(items[i]);
                var valor = parseFloat($item.text());
                total += valor;
            }

            carrinho.find(".valor-total").text(total);
            carrinho.find(".quantidade-de-itens").text(items.length);
        });
        
}

var removeItem = function(event) {
    event.preventDefault();
    
    var $self = $(this);
        $self.closest("tr").hide();			
        atualizaDados();			
};

var undo = function() {
    var $carrinho = $(this).closest(".carrinho");
    $carrinho.find("tr:visible").removeClass("recuperado");
    $carrinho.find("tr:hidden").show().addClass("recuperado");

    atualizaDados();
};

var aposInicializado = function() {
    $(".undo-btn").click(undo);
    $(".remove-item").click(removeItem);
    atualizaDados();
};	

$(aposInicializado)