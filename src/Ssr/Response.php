<?php

namespace App\Ssr;

class Response
{
    /**
     * @var string
     */
    public string $head;

    /**
     * @var string
     */
    public string $body;

    /**
     * Prepare the Inertia Server Side Rendering (SSR) response.
     *
     * @param  string  $head
     * @param  string  $body
     */
    public function __construct(string $head, string $body)
    {
        $this->head = $head;
        $this->body = $body;
    }
}
