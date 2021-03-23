<!-- //najpierw wskazujemy na layout strony -->
<?= $this->extend('layouts/default'); ?>

<!-- teraz uzupełniamy treść zmienną sekcji w layoucie -->
<?= $this->section('title') ?>Show table<?= $this->endsection() ?>

<?= $this->section('content') ?>

<h1>Tasks</h1>

<a href="<?= site_url('/tasks') ?>">&laquo; back to index</a>

<dl>
    <dt>ID</dt>
    <dd><?= $task->id ?></dd>

    <dt>Decription</dt>
    <dd><?= esc($task->description) ?></dd>

    <dt>Created</dt>
    <dd><?= $task->created_at ?></dd>

    <dt>updated_at</dt>
    <dd><?= $task->updated_at ?></dd>
</dl>

<a href="<?= site_url('/tasks/edit/'.$task->id) ?>">Edit</a>
<a href="<?= site_url('/tasks/delete/'.$task->id) ?>">Delete Task</a>

<?= $this->endsection() ?>
