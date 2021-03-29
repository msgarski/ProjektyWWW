<?= $this->extend('layouts/default'); ?>

<?= $this->section('title') ?>Edit row<?php $this->endsection() ?>

<?= $this->section('content') ?>

<h1>Delete task</h1>

<p>Jesteś pewien???</p>

<?= form_open("/tasks/delete/".$task->id) ?>

<button>Tak</button>

<a href="<?= site_url('/tasks/show/'.$task->id) ?>">Cancel</a>


</form>



<?= $this->endsection() ?>