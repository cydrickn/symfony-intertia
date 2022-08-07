<?php

namespace App\Ssr;

interface GatewayInterface
{
    /**
     * Dispatch the Inertia page to the Server Side Rendering engine.
     *
     * @param array $page
     * @return Response|null
     */
    public function dispatch(array $page): ?Response;
}
