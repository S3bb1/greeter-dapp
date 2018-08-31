import { ChangeDetectorRef } from 'angular-libs';
import { AsyncComponent, EvanAlertService, EvanBCCService, EvanCoreService, EvanQrCodeService, EvanQueue, EvanRoutingService } from 'angular-core';
import { greeterdemoService } from '../../services/service';
/**************************************************************************************************/
export declare class SampleComponent extends AsyncComponent {
    private alertService;
    private bcc;
    private core;
    private qrCodeService;
    private queueService;
    private ref;
    private routingService;
    private greeterdemoServiceInstance;
    /**
     * Initialized queueId to simple add data to a queue.
     */
    private queueId;
    /**
     * Function to unsubscribe from queue results.
     */
    private queueWatcher;
    /**
     * show data ui update
     */
    private dispatcherIsFinished;
    private greetingMessage;
    constructor(alertService: EvanAlertService, bcc: EvanBCCService, core: EvanCoreService, qrCodeService: EvanQrCodeService, queueService: EvanQueue, ref: ChangeDetectorRef, routingService: EvanRoutingService, greeterdemoServiceInstance: greeterdemoService);
    /**
     * Test if service and dispatcher are working.
     */
    _ngOnInit(): Promise<void>;
    /**
     * Clear the queue watcher
     *
     * @return     {<type>}  { description_of_the_return_value }
     */
    _ngOnDestroy(): Promise<void>;
}
