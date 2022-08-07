<?php

namespace App\Ssr;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use function Webmozart\Assert\Tests\StaticAnalysis\throws;

class HttpGateway implements GatewayInterface
{
    private string $url;
    private HttpClientInterface $httpClient;

    public function __construct(HttpClientInterface $httpClient, string $url)
    {
        $this->url = $url;
        $this->httpClient = $httpClient;
    }

    /**
     * Dispatch the Inertia page to the Server Side Rendering engine.
     *
     * @param  array  $page
     * @return Response|null
     */
    public function dispatch(array $page): ?Response
    {
        try {
            $response = $this->httpClient->request('POST', $this->url, [
                'body' => json_encode($page)
            ]);
        } catch (\Exception $e) {
            return null;
        }

        if (is_null($response)) {
            return null;
        }

        $content = $response->toArray();

        return new Response(
            implode("\n", $content['head']),
            $content['body']
        );
    }
}
