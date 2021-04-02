<?php

namespace App\Controllers;

class Login extends BaseController
{
    public function new()
    {
        return view('Login/new');
    }

    public function create()
    {
        $email = $this->request->getPost('email');

        $password = $this->request->getPost('password');

        $auth = new \App\Libraries\Authentication;

        if($auth->login($email, $password))
        {
            return redirect()->to('/')
                            ->with('info', 'Logowanie udane');

        }
        else
        {
            return redirect()->back()
                            ->withInput()
                            ->with('warning', 'Invalid login');
        }   
    }

    public function delete()
    {
        $auth = new \App\Libraries\Authentication;

        $auth->logout();

        return redirect()->to('/Login/showLogoutMessage');
       
    }

    public function showLogoutMessage()
    {
        return redirect()->to('/')
                        ->with('info', 'Wylogowano');
    }
}