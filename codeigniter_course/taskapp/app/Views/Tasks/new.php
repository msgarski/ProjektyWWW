<!-- //najpierw wskazujemy na layout strony -->
<?= $this->extend('layouts/default'); ?>

<!-- teraz uzupełniamy treść zmienną sekcji w layoucie -->
<?= $this->section('title') ?>New task !!!<?= $this->endsection() ?>

<?= $this->section('content') ?>

<h1>New task</h1>

<!--  <form method="post" action="/tasks/create">  -->

<?php if (session()->has('errors')): ?>
    <ul>
        <?php foreach(session('errors') as $errorek): ?>
            <li><?= $errorek ?></li>
        <?php endforeach ?>
    </ul>

<?php endif ?>


<?= form_open('/tasks/create') ?>

    <?= $this->include('Tasks/form') ?>

    <button>Save</button>
    <a href="<?= site_url('/tasks')?>">Cancel</a>
    


</form>

<?= $this->endsection() ?>