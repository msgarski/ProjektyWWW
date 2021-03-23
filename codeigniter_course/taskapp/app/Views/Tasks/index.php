<?= $this->extend("layouts/default") ?>


<?= $this->section("title") ?>
Nowy task

<?= $this->endSection() ?>


<?= $this->section("content") ?>
        <h1>Tasksy 2</h1>

        <a href="<?= site_url('/tasks/new')?>">New task link</a>

        <ul>
                <?php foreach($task as $taskunio): ?>
                        <li>
                                <a href="<?= site_url('/tasks/show/'.$taskunio->id) ?>">
                                <?= esc($taskunio->description) ?>
                                </a>
                        </li>
                        <?php endforeach; ?>

        </ul>



