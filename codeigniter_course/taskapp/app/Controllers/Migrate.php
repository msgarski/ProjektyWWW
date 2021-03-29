<?php

namespace App\Controllers;

class Migrate extends BaseController
{
    public function index()
    {
        //$this->forge->disableForeignKeyChecks();
        $migrate = \Config\Services::migrations();

        try
        {
            $migrate->latest();
            echo "Migrated!";
        }
        catch(\Exception $e)
        {
            $e->getMessage();
        }

        //$this->forge->enableForeignKeyChecks();
    }
}