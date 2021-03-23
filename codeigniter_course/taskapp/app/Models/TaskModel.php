<?php

namespace App\Models;

class TaskModel extends \CodeIgniter\Model
{
    // teraz wybieramy tabelę, z którą będziemy pracować:
    protected $table = 'task';

    protected $returnType = 'App\Entities\Task';

    protected $useTimestamps = true;

    protected $allowedFields = ['description'];

    protected $validationRules = [
        'description'   =>  'required'
    ];

    protected $validationMessages = [
        'description'   =>  [
            'required'  =>  'coś trzeba tu napisać!!'
        ]
    ];
}

