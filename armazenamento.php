<?php
// Conexão ao banco de dados
$conectar = new PDO("mysql:host=localhost;port=3306;dbname=make_pc;", "root", "");

// Captura das informações do formulário
$nome = $_POST['nome'];
$email = $_POST['e-mail'];
$telefone = strval($_POST['tel']);
$mensagem = $_POST['mensagem'];

// Verificando ambiguidade de e-mail na base de dados
$select = $conectar->prepare("SELECT * from mensagens WHERE email =:email");
$select->bindParam(':email', $email);
$select->execute();
$retorno = $select->rowCount();

if ($retorno > 0) {
    echo "<script>alert('Esse e-mail já enviou uma mensagem, aguarde o contato!');
                    window.history.back();</script>";
} else {
    echo "<script>alert('Enviando...');
                    window.history.back();</script>";
}

// Inserindo dados no banco de dados
$insert = $conectar->prepare("INSERT INTO mensagens (nome, email, telefone, mensagem) VALUES (:nome, :email, :telefone, :mensagem)");
$insert->bindParam(':nome', $nome);
$insert->bindParam(':email', $email);
$insert->bindParam(':telefone', $telefone);
$insert->bindParam(':mensagem', $mensagem);
$insert->execute();
$retorno = $insert->rowCount();

if ($retorno > 0) {
    echo "<script>alert('Mensagem enviada com sucesso!');
    window.history.back();</script>";
   
} else {
    echo "<script>alert('Erro no envio da mensagem, tente novamente!');
    window.history.back();</script>";
}
