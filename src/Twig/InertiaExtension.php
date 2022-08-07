<?php

namespace App\Twig;

use App\Ssr\GatewayInterface;
use App\Ssr\Response;
use Twig\Extension\AbstractExtension;
use Twig\Markup;
use Twig\TwigFunction;

class InertiaExtension extends AbstractExtension
{
    private bool $isSsr;
    private GatewayInterface $gateway;

    public function __construct(GatewayInterface $gateway, bool $isSsr = false)
    {
        $this->isSsr = true;
        $this->gateway = $gateway;
    }

    public function getFunctions(): array
    {
        return [new TwigFunction('inertia', [$this, 'inertiaFunction'])];
    }

    public function inertiaFunction($page)
    {
        if ($this->isSsr) {
            $response = $this->gateway->dispatch($page);
            if ($response instanceof Response) {
                return new Markup($response->body, 'UTF-8');
            }
        }

        return new Markup('<div id="app" data-page="'.htmlspecialchars(json_encode($page)).'"></div>', 'UTF-8');
    }
}
