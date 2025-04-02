<?php
// Conexão com o banco
$conn = new mysqli("localhost", "usuario", "senha", "banco");

// Verifica conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Busca os vídeos e suas descrições
$sql = "SELECT caminho_video, descricao FROM videos";
$result = $conn->query($sql);
?>

<section id="portfolio" class="portfolio">
    <div class="container">
        <h2 class="section-title">Galeria de Vídeos</h2>

        <div class="portfolio-container">
            <?php while ($row = $result->fetch_assoc()) { ?>
                <div class="portfolio-item">
                    <video src="<?php echo $row['caminho_video']; ?>" controls></video>
                    <p class="video-description"><?php echo $row['descricao']; ?></p>
                </div>
            <?php } ?>
        </div>
    </div>
</section>

<?php $conn->close(); ?>