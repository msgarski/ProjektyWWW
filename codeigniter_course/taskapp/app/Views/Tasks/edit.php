<?= $this->extend('layouts/default'); ?>

<?= $this->section('title') ?>Edit row<?php $this->endsection() ?>

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


<?= form_open('/tasks/update/'.$task->id) ?>

    <?= $this->include('Tasks/form') ?>

    <button>Save</button>
    <a href="<?= site_url('/tasks/show/'.$task->id)?>">Cancel</a>
    


</form>



<?= $this->endsection() ?>

