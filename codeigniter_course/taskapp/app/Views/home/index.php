<?= $this->extend("layouts/default") ?>

<?= $this->section("title") ?>Home<?= $this->endSection() ?>

<?= $this->section("content") ?>

    <h1>Welcome</h1>

    <a href="<?= site_url("/signup") ?>">Sign up</a>


    <?php if(current_user()): ?>

        <p>Hello, <?= esc(current_user()->name)  ?></p>

        <a href="<?= site_url('/logout') ?>">Wyloguj się</a>

    <?php else: ?>

        <p>Użytkownik nie jest zalogowany</p>

        <a href="<?= site_url("/login") ?>">Log in</a>

    <?php endif; ?>

<?= $this->endSection() ?>